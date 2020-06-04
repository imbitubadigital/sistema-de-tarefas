import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

import { ContentBox } from '~/styles/components/Boxes';
import { ContentForm, BoxInput } from '~/styles/components/Forms';

import Button from '~/styles/components/Button';

import { Container, Content, ContentBtn, ContentLink } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Informe seu email!')
    .email('Atenção! E-mail inválido!'),
  password: Yup.string().required('Informe sua senha!'),
});

export default function Login() {
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function myHandleSubmit(data) {
    dispatch(signInRequest(data.email, data.password));
  }

  return (
    <Container>
      <Content>
        <header>
          <h2>Login</h2>
        </header>
        <ContentBox>
          <Formik
            initialValues={{}}
            onSubmit={myHandleSubmit}
            validationSchema={schema}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <ContentForm>
                  <BoxInput basis={100}>
                    <label>Email:</label>
                    <Field type="email" name="email" placeholder="Seu e-mail" />
                    <ErrorMessage name="email" component="span" />
                  </BoxInput>

                  <BoxInput basis={100}>
                    <label>Senha:</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Sua senha"
                    />
                    <ErrorMessage name="password" component="span" />
                  </BoxInput>
                  <ContentBtn>
                    {!loading ? (
                      <Button size="default" color="transparent" type="submit">
                        <i className="fa fa-lock" aria-hidden="true" />
                        Logar
                      </Button>
                    ) : (
                      <Button size="default" color="transparent" type="button">
                        <i
                          className="fa fa-circle-o-notch load-rotate"
                          aria-hidden="true"
                        />
                        Logando
                      </Button>
                    )}
                  </ContentBtn>
                </ContentForm>
              </form>
            )}
          </Formik>
        </ContentBox>
      </Content>
      <ContentLink>
        <Link
          to="/cadastro-usuario"
          title="Não tem conta? Clique aqui para criar!"
        >
          Não tem conta? Clique aqui e cadastre-se!
        </Link>
      </ContentLink>
    </Container>
  );
}
