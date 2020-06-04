import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Formik, Field, ErrorMessage } from 'formik';
import { recoverPassword } from '~/store/modules/user/actions';
import Breadcrumb from '~/components/Dashboard/Breadcrumb';

import { BoxCentral, Box, ContentBox } from '~/styles/components/Boxes';

import { ContentForm, BoxInput } from '~/styles/components/Forms';
import Button from '~/styles/components/Button';

const schema = Yup.object().shape({
  old_password: Yup.string().required('Informe sua última senha válida!'),
  password: Yup.string()
    .required('Informe sua nova senha!')
    .min(6, 'Sua senha deve ter o mínimo de 6 caracteres.'),
  password_confirmation: Yup.string()
    .required('Repita sua nova senha!')
    .oneOf([Yup.ref('password'), null], 'A repetição da senha não confere!'),
});

export default function Recover() {
  const initialState = {
    old_password: '',
    password: '',
    password_confirmation: '',
  };
  const loading = useSelector(state => state.user.profile.loading);

  const dispatch = useDispatch();

  function handleSubmitRecover(data) {
    dispatch(
      recoverPassword(
        data.old_password,
        data.password,
        data.password_confirmation
      )
    );
  }

  return (
    <>
      <Breadcrumb title="Troca Minha Senha">
        <li>
          <Link to="/dashboard" title="Dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <Link to="/trocar-senha" title="Troca Minha Senha">
            <span>Troca Senha</span>
          </Link>
        </li>
      </Breadcrumb>
      <BoxCentral justify="center" align="center">
        <Box basis={35}>
          <header>
            <h2>Trocar senha</h2>
          </header>
          <ContentBox>
            <Formik
              initialValues={initialState}
              onSubmit={handleSubmitRecover}
              validationSchema={schema}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <ContentForm>
                    <BoxInput basis={100}>
                      <label>Senha Antiga:</label>
                      <Field
                        type="password"
                        name="old_password"
                        placeholder="Sua última senha válida"
                      />
                      <ErrorMessage name="old_password" component="span" />
                    </BoxInput>
                    <BoxInput basis={100}>
                      <label>Nova Senha:</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Sua nova senha"
                      />
                      <ErrorMessage name="password" component="span" />
                    </BoxInput>
                    <BoxInput basis={100}>
                      <label>Repita Nova Senha:</label>
                      <Field
                        type="password"
                        name="password_confirmation"
                        placeholder="Repita sua nova senha"
                      />
                      <ErrorMessage
                        name="password_confirmation"
                        component="span"
                      />
                    </BoxInput>

                    {!loading ? (
                      <Button size="default" color="green" type="submit">
                        <i className="fa fa-floppy-o" aria-hidden="true" />
                        Salvar
                      </Button>
                    ) : (
                      <Button size="default" color="transparent" type="button">
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
          </ContentBox>
        </Box>
      </BoxCentral>
    </>
  );
}
