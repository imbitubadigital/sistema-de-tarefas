import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { createProfileRequest } from '~/store/modules/user/actions';

import { ContentBox } from '~/styles/components/Boxes';
import { ContentForm, BoxInput } from '~/styles/components/Forms';

import Button from '~/styles/components/Button';

import { Container, Content, ContentBtn, ContentLink } from './styles';

const schema = Yup.object().shape({
  username: Yup.string().required('Informe seu nome completo!'),
  email: Yup.string()
    .required('Informe seu email!')
    .email('Atenção! E-mail inválido!'),
  password: Yup.string().required('Informe sua senha!'),
  password_confirmation: Yup.string()
    .required('Repita sua senha!')
    .oneOf([Yup.ref('password'), null], 'A repetição da senha não confere!'),
});

export default function Login() {
  const loading = useSelector(state => state.user.loading);

  const dispatch = useDispatch();

  function myHandleSubmit(data) {
    dispatch(createProfileRequest(data));
  }

  return (
    <Container>
      <Content>
        <header>
          <h2>Cadastre-se</h2>
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
                    <label>Nome:</label>
                    <Field type="text" name="username" placeholder="Seu nome" />
                    <ErrorMessage name="username" component="span" />
                  </BoxInput>
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
                  <BoxInput basis={100}>
                    <label>Repita Senha:</label>
                    <Field
                      type="password"
                      name="password_confirmation"
                      placeholder="Repita sua senha"
                    />
                    <ErrorMessage
                      name="password_confirmation"
                      component="span"
                    />
                  </BoxInput>
                  <ContentBtn>
                    {!loading ? (
                      <Button size="default" color="transparent" type="submit">
                        <i className="fa fa-lock" aria-hidden="true" />
                        Cadastrar
                      </Button>
                    ) : (
                      <Button size="default" color="transparent" type="button">
                        <i
                          className="fa fa-circle-o-notch load-rotate"
                          aria-hidden="true"
                        />
                        Cadastrando
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
        <Link to="/" title="Clique aqui e faça seu login!!">
          Clique aqui e faça seu login!
        </Link>
      </ContentLink>
    </Container>
  );
}
