import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';

import { Formik, Field, ErrorMessage } from 'formik';

import Modal from 'react-awesome-modal';
import {
  loadCategory,
  categorySuccess,
} from '~/store/modules/category/actions';
import api from '~/services/api';
import LoadTable from '~/components/Dashboard/LoadTable';
import { DatatableCustom, BoxBtn } from '~/styles/components/Table';
import Breadcrumb from '~/components/Dashboard/Breadcrumb';
import Confirm from '~/components/Confirm';

import { ContentForm, BoxInput } from '~/styles/components/Forms';

import {
  BoxModal,
  Closed,
  ContentBoxModal,
} from '~/styles/components/BoxesModal';
import { BoxCentral, Box, ContentBox } from '~/styles/components/Boxes';

import Button from '~/styles/components/Button';

const schema = Yup.object().shape({
  name: Yup.string().required('Informe o nome da categoria!'),
});

export default function Category() {
  const data = useSelector(state => state.category.data);
  const loading = useSelector(state => state.category.loading);

  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [question, setQuestion] = useState('Deseja deletar?');
  const [loadModal, setLoadModal] = useState(false);
  const [titleModal, setTitleModal] = useState('Cadastro');
  const [initialState, setInitialState] = useState({ name: '' });
  const [idDel, setIdDel] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleUpdate(row) {
    setInitialState(row);
    setTitleModal('Atualizar Categoria');
    setModalVisible(true);
  }

  function handleCreate() {
    setTitleModal('Cadastrar Categoria');
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    setInitialState({ name: '' });
  }

  function closeConfirm() {
    setConfirmVisible(false);
    setIdDel(null);
    setQuestion(null);
  }

  async function delCategory() {
    try {
      const response = await api.delete(`category/${idDel}`);
      dispatch(categorySuccess(response.data));
      closeConfirm();
    } catch (err) {
      const { response } = err;
      if (response && response.status && response.status === 401) {
        toast.warning(response.data.error.message);
      } else if (response && response.status && response.status === 400) {
        toast.warning(response.data[0].message);
      } else {
        toast.warning('Erro interno ao deletar!');
      }
    }
  }

  function modalConfirm(row) {
    setIdDel(row.id);
    setConfirmVisible(true);
    setQuestion(`Tem certeza que deseja deletar a categoria ${row.name}`);
  }

  async function handleSubmitForm(cat, { resetForm }) {
    setLoadModal(true);
    try {
      if (cat.id) {
        const response = await api.put(`category/${cat.id}`, {
          name: cat.name,
        });
        dispatch(categorySuccess(response.data));
        toast.success('Categoria atualizada com sucesso!');
      } else {
        const responde = await api.post('category', { name: cat.name });
        dispatch(categorySuccess(responde.data));
        toast.success('Categoria cadastrada com sucesso!');
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
        toast.warning('Erro interno ao gerenciar categoria!');
      }
    }
  }

  const columns = [
    {
      name: 'Cod',
      selector: 'id',
      sortable: true,
      hide: 'md',
      wrap: true,
    },
    {
      name: 'Categoria',
      selector: 'name',
      sortable: true,
      wrap: true,
    },
    {
      name: 'Criado em',
      selector: 'created_at',
      sortable: true,
      wrap: true,
      cell: row => format(parseISO(row.created_at), "dd/MM/yyyy 'às' HH:mm"),
    },
    {
      name: 'Atualizado em',
      selector: 'updated_at',
      sortable: true,
      wrap: true,
      cell: row => format(parseISO(row.updated_at), "dd/MM/yyyy 'às' HH:mm"),
    },
    {
      name: 'Tarefas',
      wrap: true,
      center: true,
      cell: row =>
        `${row.tasks.length > 0 ? row.tasks.length : '0'} anexada${
          row.tasks.length > 1 ? 's' : ''
        }`,
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

  return (
    <>
      <Confirm
        visible={confirmVisible}
        question={question}
        action={delCategory}
        close={closeConfirm}
      />
      <Breadcrumb title="Categorias">
        <li>
          <Link to="/dashboard" title="Dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <Link to="/categorias" title="Categoria">
            <span>Categorias</span>
          </Link>
        </li>
      </Breadcrumb>
      <BoxCentral justify="center" align="flex-start">
        <Box basis={100}>
          <header>
            <h2>Listagem de Categorias</h2>
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
              onTableUpdate={() => {}}
              progressPending={loading}
              striped
              noDataComponent="Nenhum resultado encontrado!"
              progressComponent={<LoadTable />}
            />
          </ContentBox>
        </Box>
      </BoxCentral>

      <Modal
        visible={modalVisible}
        width="500"
        height="250"
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
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <ContentForm>
                    <BoxInput basis={100}>
                      <label>Nome da Categoria:</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Nome da categoria"
                      />
                      <ErrorMessage name="name" component="span" />
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
    </>
  );
}
