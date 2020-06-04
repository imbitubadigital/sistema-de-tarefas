import React, { useState, useEffect } from 'react';
import { format, parseISO, addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { Formik, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-awesome-modal';
import useDebounce from '~/components/Debounce';
import api from '~/services/api';
import Confirm from '~/components/Confirm';
import DatePickerField from '~/components/DatePickerField';
import LoadTable from '~/components/Dashboard/LoadTable';
import { DatatableCustom, BoxBtn } from '~/styles/components/Table';
import Breadcrumb from '~/components/Dashboard/Breadcrumb';

import {
  loadTask,
  taskSuccess,
  updateStatusTask,
} from '~/store/modules/task/actions';
import { loadCategorySelect } from '~/store/modules/category/actions';
import Description from './Description';

import { BoxCentral, Box, ContentBox } from '~/styles/components/Boxes';

import {
  BoxInputSearch,
  ContentForm,
  BoxInput,
} from '~/styles/components/Forms';
import { St } from './styles';

import Button from '~/styles/components/Button';

import {
  BoxModal,
  Closed,
  ContentBoxModal,
} from '~/styles/components/BoxesModal';

const schema = Yup.object().shape({
  category_id: Yup.string().required('Selecione uma categoria!'),
  title: Yup.string().required('Informe o título da tarefa!'),
  description: Yup.string().required('Informe o descrição da tarefa!'),
});

export default function Companies() {
  const loading = useSelector(state => state.task.loading);
  const totalRows = useSelector(state => state.task.totalRows);
  const perPage = useSelector(state => state.task.perPage);
  const page = useSelector(state => state.task.page);

  const dataTasks = useSelector(state => state.task.data);
  const dataCategorySelect = useSelector(state => state.category.dataSelect);
  const [data, setData] = useState(dataTasks);
  const [titleModal, setTitleModal] = useState('Cadastro');
  const [modalVisible, setModalVisible] = useState(false);

  const [idDel, setIdDel] = useState(null);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [loadModal, setLoadModal] = useState(false);
  const [initialState, setInitialState] = useState({
    category_id: '',
    title: '',
    description: '',
    task_start: new Date(),
    task_end: addDays(new Date(), 1),
  });
  const [question, setQuestion] = useState('Deseja deletar?');

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const debouncedSearch = useDebounce(search, 800);

  useEffect(() => {
    dispatch(loadTask(1, perPage, debouncedSearch));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  useEffect(() => {
    dispatch(loadCategorySelect());
    dispatch(loadTask(page, perPage, search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData(dataTasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTasks]);

  async function handleStatus(id, status) {
    dispatch(updateStatusTask(id, status));
  }

  function handlePerRowsChange(perPageChange, pageChange) {
    dispatch(loadTask(pageChange, perPageChange, search));
  }

  function handlePageChange(loadPage) {
    dispatch(loadTask(loadPage, perPage, search));
  }

  function handleUpdate(row) {
    const { id, category_id, title, description, task_start, task_end } = row;
    setInitialState({
      id,
      category_id,
      title,
      description,
      task_start: parseISO(task_start),
      task_end: parseISO(task_end),
    });
    setTitleModal('Atualizar Plano');
    setModalVisible(true);
  }

  function modalConfirm(row) {
    setIdDel(row.id);
    setConfirmVisible(true);
    setQuestion(`Tem certeza que deseja deletar o ${row.title}`);
  }

  const columns = [
    {
      name: 'Cod',
      selector: 'id',
      sortable: true,
      hide: 'md',
    },
    {
      name: 'Titulo',
      selector: 'title',
      sortable: true,
      ignoreRowClick: true,
      wrap: true,
      hide: 'sm',
    },
    {
      name: 'Data incial',
      hide: 'md',
      selector: 'task_start',
      sortable: true,
      wrap: true,
      cell: row => format(parseISO(row.task_start), 'dd/MM/yyyy'),
    },
    {
      name: 'Data final',
      hide: 'md',
      selector: 'task_end',
      sortable: true,
      wrap: true,
      cell: row => format(parseISO(row.task_end), 'dd/MM/yyyy'),
    },
    {
      name: 'Categoria',
      selector: 'category',
      wrap: true,
      cell: row => row.category.name,
    },
    {
      name: 'Status',
      sortable: true,
      hide: 'md',
      center: true,
      cell: row => (
        <St>
          <Switch
            onChange={() => handleStatus(row.id, row.status)}
            checked={row.status === 1}
          />
          <span>{row.status > 0 ? 'Concluída' : 'Pendente'}</span>
        </St>
      ),
    },
    {
      sortable: false,
      right: true,
      ignoreRowClick: true,
      minWidth: '100px',
      cell: row => (
        <BoxBtn>
          <Button
            size="default"
            color="default"
            onClick={() => handleUpdate(row)}
          >
            <i className="fa fa-pencil" aria-hidden="true" />
          </Button>
          <Button
            size="default"
            color="danger"
            onClick={() => modalConfirm(row)}
          >
            <i className="fa fa-trash" aria-hidden="true" />
          </Button>
        </BoxBtn>
      ),
    },
  ];

  function handleCreate() {
    if (dataCategorySelect.length < 1) {
      toast.warning(
        'Para cadastrar tarefas primeiramente cadastre as categorias!'
      );
    } else {
      setInitialState({
        category_id: '',
        title: '',
        description: '',
        task_start: new Date(),
        task_end: addDays(new Date(), 1),
      });

      setTitleModal('Cadastrar Tarefa');
      setModalVisible(true);
    }
  }

  function closeModal() {
    setModalVisible(false);
    setInitialState({ name: '' });
  }

  async function handleSubmitForm(dataSubmit, { resetForm }) {
    const post = dataSubmit;
    setLoadModal(true);
    try {
      if (dataSubmit.id) {
        const response = await api.put(`task/${dataSubmit.id}`, post);
        dispatch(taskSuccess(response.data));
        toast.success('Tarefa atualizada com sucesso!');
      } else {
        const response = await api.post('task', post);

        dispatch(taskSuccess(response.data));
        toast.success('Tarefa cadastrada com sucesso!');
      }
      closeModal();
      resetForm({});
      setLoadModal(false);
    } catch (err) {
      const { response } = err;
      setLoadModal(false);
      if (response && response.status && response.status === 401) {
        toast.warning(response.data.error.message);
      } else if (response && response.status && response.status === 400) {
        toast.warning(response.data[0].message);
      } else {
        toast.warning('Erro interno ao gerenciar tarefas!');
      }
    }
  }

  function closeConfirm() {
    setConfirmVisible(false);
    setIdDel(null);
    setQuestion(null);
  }

  async function delTask() {
    try {
      const response = await api.delete(`task/${idDel}`);
      dispatch(taskSuccess(response.data));
      closeConfirm();
    } catch (err) {
      const { response } = err;
      if (response && response.status && response.status === 401) {
        toast.warning(response.data.error.message);
      } else if (response && response.status && response.status === 400) {
        toast.warning(response.data[0].message);
      } else {
        toast.warning('Erro interno ao plano!');
      }
    }
  }

  return (
    <>
      <Confirm
        visible={confirmVisible}
        question={question}
        action={delTask}
        close={closeConfirm}
      />
      <Breadcrumb title="Lista de Tarefas">
        <li>
          <Link to="/dashboard" title="Dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <Link to="/tarefas" title="Lista Geral de Tarefas">
            <span>Tarefas</span>
          </Link>
        </li>
      </Breadcrumb>
      <BoxCentral justify="space-between" align="flex-start">
        <Box basis={100}>
          <header>
            <h2>Lista Geral de Tarefas</h2>
            <BoxInputSearch basis={50}>
              <label>Pesquisa:</label>
              <input
                name="search"
                value={search}
                placeholder="Pesquisar tarefa"
                onChange={e => setSearch(e.target.value)}
              />
            </BoxInputSearch>
            <Button
              size="small"
              color="greenShow"
              type="button"
              onClick={handleCreate}
            >
              <i className="fa fa-plus" aria-hidden="true" />
              Nova
            </Button>
          </header>
          <ContentBox>
            <DatatableCustom
              columns={columns}
              data={data}
              progressPending={loading}
              striped
              progressComponent={<LoadTable />}
              pagination
              paginationComponentOptions={{
                rowsPerPageText: 'Resultados por página',
                rangeSeparatorText: 'de',
              }}
              paginationServer
              paginationTotalRows={totalRows}
              onChangeRowsPerPage={handlePerRowsChange}
              onChangePage={handlePageChange}
              noDataComponent="Nenhum resultado encontrado!"
              expandableRows
              expandableDisabledField="expanderDisabled"
              expandableRowsComponent={<Description />}
            />
          </ContentBox>
        </Box>
        <Modal
          visible={modalVisible}
          width="500"
          height="520"
          effect="fadeInDown"
          onClickAway={() => {}}
        >
          <BoxModal>
            <header>
              <h2>{titleModal}</h2>
              <Closed onClick={closeModal}>
                <i className="fa fa-times" aria-hidden="true" />
              </Closed>
            </header>
            <ContentBoxModal>
              <Formik
                initialValues={initialState}
                onSubmit={handleSubmitForm}
                validationSchema={schema}
                enableReinitialize
              >
                {({ values, setFieldValue, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <ContentForm>
                      <BoxInput basis={100}>
                        <label>Categoria da Tarefa</label>

                        <Field as="select" defaultValue={1} name="category_id">
                          <option value="">Selecione...</option>
                          {dataCategorySelect.length > 0 &&
                            dataCategorySelect.map(c => (
                              <option key={c.id} value={c.id}>
                                {c.name}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage name="category_id" component="span" />
                      </BoxInput>
                      <BoxInput basis={100}>
                        <label>Título da tarefa:</label>
                        <Field
                          type="text"
                          name="title"
                          placeholder="Título da tarefa"
                        />
                        <ErrorMessage name="title" component="span" />
                      </BoxInput>
                      <BoxInput basis={100}>
                        <label>Descrição da tarefa:</label>
                        <Field
                          name="description"
                          component="textarea"
                          rows="3"
                          placeholder="Informe a descrição da tarefa."
                        />
                        <ErrorMessage name="description" component="span" />
                      </BoxInput>
                      <BoxInput basis={49}>
                        <label>Data incial:</label>
                        <DatePickerField
                          name="task_start"
                          value={values.task_start}
                          onChange={setFieldValue}
                        />
                      </BoxInput>
                      <BoxInput basis={49}>
                        <label>Data Final:</label>
                        <DatePickerField
                          name="task_end"
                          value={values.task_end}
                          onChange={setFieldValue}
                        />
                      </BoxInput>

                      {!loadModal ? (
                        <Button
                          size="default"
                          color="transparent"
                          filled="false"
                          type="submit"
                        >
                          <i className="fa fa-floppy-o" aria-hidden="true" />
                          Salvar
                        </Button>
                      ) : (
                        <Button
                          size="default"
                          color="transparent"
                          filled="false"
                          type="button"
                        >
                          <i
                            className="fa fa-circle-o-notch load-rotate"
                            aria-hidden="true"
                          />
                          Salvando
                        </Button>
                      )}
                    </ContentForm>
                  </form>
                )}
              </Formik>
            </ContentBoxModal>
          </BoxModal>
        </Modal>
      </BoxCentral>
    </>
  );
}
