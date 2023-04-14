
//////////////////////////////////////
import React from 'react';
import { Refine, Authenticated, } from '@refinedev/core';
import {
    AuthPage,
    notificationProvider,
//    ErrorComponent,
    RefineSnackbarProvider,
    RefineThemes,
    ThemedLayout,
//    Icons
} from '@refinedev/mui';
import { dataProvider, } from '@refinedev/supabase';
import routerProvider, {NavigateToResource,CatchAllNavigate} from '@refinedev/react-router-v6';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  GlobalStyles,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { supabaseClient } from 'utility';
import authProvider from './authProvider';

import { useFormContext } from "react-hook-form";

import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

import { MuiInferencer } from "@refinedev/inferencer/mui";

//import { FsPackageList } from "pages/fs_packages/list";
import { FsClassList } from "pages/fs_classes/list"; 
import { ClassEdit } from "pages/fs_classes/edit";

import 'styles/style.css';

//const { GithubOutlined } = Icons;

function App() {


  const RememeberMe = () => {
    const { register } = useFormContext();

    return (
        <FormControlLabel
            sx={{
                span: {
                    fontSize: "12px",
                    color: "text.secondary",
                },
            }}
            color="secondary"
            control={
                <Checkbox
                    size="small"
                    id="rememberMe"
                    {...register("rememberMe")}
                />
            }
            label="Remember me"
        />
    );
  };

  return (
    <BrowserRouter> 
      <ThemeProvider theme={RefineThemes.Blue}>
        <CssBaseline />
        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
        <RefineSnackbarProvider>

                
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          routerProvider={routerProvider}
          authProvider={authProvider}
          resources={[
            {
              name: "fs_packages",
              list: "/fs_packages",
              show: "/fs_packages/show/:id",
              meta: { label: "Package", canDelete: true, },
              create: "/fs_packages/create",
              edit: "/fs_packages/edit/:id",
            },
            {
              name: "fs_classes",
              list: "/fs_classes",
              show: "/fs_classes/show/:id",
              create: "/fs_classes/create",
              edit: "/fs_classes/edit/:id",
              meta: { label: "Class", canDelete: true, },
            },
            {
              name: "fs_eventtype",
              list: "/fs_eventtype",
              show: "/fs_eventtype/show/:id",
              create: "/fs_eventtype/create",
              edit: "/fs_eventtype/edit/:id",
              meta: { label: "Event Type", canDelete: true, },
            },
          ]}


          notificationProvider={notificationProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >

          <Routes>
            <Route
              element={
                <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                  <ThemedLayout>
                      <Outlet />
                  </ThemedLayout>
                </Authenticated>
              }
            >
              <Route
                  index
                  element={
                      <NavigateToResource resource="fs_classes" />
                  }
              />
              <Route path="fs_classes">
                <Route index element={<FsClassList />} />
                <Route path="show/:id" element={<MuiInferencer />} />
                <Route path="create" element={<MuiInferencer />} />
                <Route path="edit/:id" element={<ClassEdit />} />
              </Route>
              <Route path="fs_eventtype">
                <Route index element={<MuiInferencer />} />
                <Route path="show/:id" element={<MuiInferencer />} />
                <Route path="create" element={<MuiInferencer />} />
                <Route path="edit/:id" element={<MuiInferencer />} />
              </Route>
              <Route path="fs_packages">
                <Route index element={<MuiInferencer />} />
                <Route path="show/:id" element={<MuiInferencer />} />
                <Route path="create" element={<MuiInferencer />} />
                <Route path="edit/:id" element={<MuiInferencer />} />
              </Route>
            </Route>

            <Route
              element={
                <Authenticated fallback={<Outlet />}>
                  <NavigateToResource resource="fs_classes" />
                </Authenticated>
              }
            >
              <Route
                path="/login"
                element={
                  <AuthPage
                    type="login"
                    title = "Scheduling App"
                    rememberMe={<RememeberMe />}
                    providers={[
                      {
                        name: "google",
                        label: "Sign in with Google",
                        icon: (
                          <GoogleIcon
                            style={{
                              fontSize: 24,
                            }}
                          />
                        ),
                      },
                    ]}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <AuthPage
                    type="register"
                    formProps={{
                      defaultValues: {
                        email: "test@example.com",
                      },
                    }}
                    providers={[
                      {
                        name: "google",
                        label: "Sign in with Google",
                        icon: (
                          <GoogleIcon
                            style={{
                              fontSize: 24,
                            }}
                          />
                        ),
                      },
                      {
                        name: "github",
                        label: "Sign in with GitHub",
                        icon: (
                          <GitHubIcon
                            style={{
                              fontSize: 24,
                            }}
                          />
                        ),
                      },
                    ]}
                  />
                }
              />
              <Route
                path="/forgot-password"
                element={<AuthPage type="forgotPassword" />}
              />
              <Route
                path="/update-password"
                element={<AuthPage type="updatePassword" />}
              />
            </Route>



          </Routes>

        </Refine>

        </RefineSnackbarProvider>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
