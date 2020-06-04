import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import Breadcrumb from '~/components/Dashboard/Breadcrumb';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { BoxCentral, Box, ContentBox } from '~/styles/components/Boxes';

import { ContentForm, BoxInput } from '~/styles/components/Forms';
import Button from '~/styles/components/Button';

const schema = Yup.object().shape({
  username: Yup.string().required('Informe seu nome!'),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);
  const [initialState] = useState({
    ...profile,
    birth: parseISO(profile.birth),
  });

  const dispatch = useDispatch();

  function handleSubmitProfile(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <>
      <Breadcrumb title="Meus Dados">
        <li>
          <Link to="/dashboard" title="Dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <Link to="/dashboard/meus-dados" title="Meus Dados">
            <span>Meus Dados</span>
          </Link>
        </li>
      </Breadcrumb>
      <BoxCentral justify="center" align="flex-start">
        <Box basis={58}>
          <header>
            <h2>Dados Pessoais</h2>
          </header>
          <ContentBox>
            <Formik
              initialValues={initialState}
              onSubmit={handleSubmitProfile}
              validationSchema={schema}
            >
              {({
                /*  values,
                touched,
                errors,
                handleChange,
                handleBlur, */
                handleSubmit,
                // setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  <ContentForm>
                    <BoxInput basis={100}>
                      <label>Nome:</label>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Seu nome"
                      />
                      <ErrorMessage name="username" component="span" />
                    </BoxInput>

                    <BoxInput basis={100}>
                      <label>Nome:</label>
                      <Field
                        type="text"
                        name="email"
                        disabled
                        readonly
                        placeholder="Seu e-mail"
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
