import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import { Button } from '@mantine/core'
import {
  AppShell,
  Navbar,
  Header,
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  Avatar,
  Box,
  useMantineTheme,
  ActionIcon,
  Center,
} from '@mantine/core'
import {
  User,
  Book,
  Settings,
  Logout,
  ChevronRight,
  ChevronLeft,
  Sun,
  MoonStars,
} from 'tabler-icons-react'

import logo from './logo.png'

const HomeLayout = ({ children }) => {
  const { isAuthenticated, logOut, currentUser } = useAuth()

  return (
    <>
      <div className="rw-scaffold">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <AppShell
          navbar={
            <Navbar
              width={{
                // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
                sm: 300,

                // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
                lg: 400,

                // When other breakpoints do not match base width is used, defaults to 100%
                base: 100,
              }}
              height={600}
              p="xs"
            >
              {/* First section with normal height (depends on section content) */}
              {/* <Navbar.Section>ww</Navbar.Section> */}

              {/* Grow section will take all available space that is not taken by first and last sections */}
              <Navbar.Section grow mt="md">
                <div className="rw-heading">
                  <Link to={routes.profiles()} className="rw-link">
                    <UnstyledButton
                      sx={(theme) => ({
                        display: 'block',
                        width: '100%',
                        padding: theme.spacing.xs,
                        borderRadius: theme.radius.sm,
                        color:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[0]
                            : theme.black,

                        '&:hover': {
                          backgroundColor:
                            theme.colorScheme === 'dark'
                              ? theme.colors.dark[6]
                              : theme.colors.gray[0],
                        },
                      })}
                    >
                      <Group>
                        <ThemeIcon color="teal" variant="light">
                          <User size={16} />
                        </ThemeIcon>

                        <Text size="sm">Danh sách ban viên </Text>
                      </Group>
                    </UnstyledButton>
                  </Link>
                  <Link to={routes.groups()} className="rw-link">
                    <UnstyledButton
                      sx={(theme) => ({
                        display: 'block',
                        width: '100%',
                        padding: theme.spacing.xs,
                        borderRadius: theme.radius.sm,
                        color:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[0]
                            : theme.black,

                        '&:hover': {
                          backgroundColor:
                            theme.colorScheme === 'dark'
                              ? theme.colors.dark[6]
                              : theme.colors.gray[0],
                        },
                      })}
                    >
                      <Group>
                        <ThemeIcon color="violet" variant="light">
                          <Book size={16} />
                        </ThemeIcon>

                        <Text size="sm">Danh sách nhóm</Text>
                      </Group>
                    </UnstyledButton>
                  </Link>

                  <UnstyledButton
                    sx={(theme) => ({
                      display: 'block',
                      width: '100%',
                      padding: theme.spacing.xs,
                      borderRadius: theme.radius.sm,
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[0]
                          : theme.black,

                      '&:hover': {
                        backgroundColor:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                      },
                    })}
                  >
                    <Group>
                      <ThemeIcon color="blue" variant="light">
                        <Settings size={16} />
                      </ThemeIcon>

                      <Text size="sm">Lịch hoạt động </Text>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton
                    sx={(theme) => ({
                      display: 'block',
                      width: '100%',
                      padding: theme.spacing.xs,
                      borderRadius: theme.radius.sm,
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[0]
                          : theme.black,

                      '&:hover': {
                        backgroundColor:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                      },
                    })}
                  >
                    <Group>
                      <ThemeIcon color="blue" variant="light">
                        <Settings size={16} />
                      </ThemeIcon>

                      <Text size="sm">Loại hình hoạt động </Text>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton
                    sx={(theme) => ({
                      display: 'block',
                      width: '100%',
                      padding: theme.spacing.xs,
                      borderRadius: theme.radius.sm,
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[0]
                          : theme.black,

                      '&:hover': {
                        backgroundColor:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                      },
                    })}
                  >
                    <Group>
                      <ThemeIcon color="blue" variant="light">
                        <Settings size={16} />
                      </ThemeIcon>

                      <Text size="sm">Điểm danh </Text>
                    </Group>
                  </UnstyledButton>
                </div>
              </Navbar.Section>

              {/* Last section with normal height (depends on section content) */}
              <Navbar.Section>
                {isAuthenticated ? (
                  <div>
                    <UnstyledButton
                      onClick={() => logOut()}
                      sx={(theme) => ({
                        display: 'block',
                        width: '100%',
                        padding: theme.spacing.xs,
                        borderRadius: theme.radius.sm,
                        color:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[0]
                            : theme.black,

                        '&:hover': {
                          backgroundColor:
                            theme.colorScheme === 'dark'
                              ? theme.colors.dark[6]
                              : theme.colors.gray[0],
                        },
                      })}
                    >
                      <Group>
                        <ThemeIcon color="black" variant="light">
                          <Logout size={16} />
                        </ThemeIcon>

                        <Text size="sm">Đăng xuất</Text>
                      </Group>
                    </UnstyledButton>
                  </div>
                ) : (
                  <Link
                    to={routes.login()}
                    className=" rw-button rw-button-green"
                  >
                    Đăng nhập
                  </Link>
                )}
              </Navbar.Section>
            </Navbar>
          }
          header={
            <Header height={60} p="xs">
              <Group position="apart">
                <img className="" width={60} src={logo} alt="BTN Gia Dinh" />
                <ActionIcon
                  variant="default"
                  onClick={() => console.log('asd')}
                  size={30}
                >
                  <Sun size={16} />
                </ActionIcon>
              </Group>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <main className="rw-main">{children}</main>
        </AppShell>
      </div>
    </>
  )
}

export default HomeLayout
