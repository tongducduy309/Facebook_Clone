'use client';
import { NextPage } from "next";
import Image from "next/image";
import HeaderComponent from "../../components/header/Header";
import { Post } from "@/libs/components/Post/component";
import React from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { Box, Button, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';
import { PostComposerCard } from "@/libs/components/PostComposerCard/component";
import { Ellipsis, Search } from "lucide-react";
import { UserOnline } from "@/libs/components/UserOnline/component";
import { FBMenuItemButton } from "@/components/MenuItemButton/component";
import { Friend_Invitation } from "@/libs/components/Friend_Invitation/component";

export const Home: NextPage = () => {
  const translations = useTranslations('Pages.Home');
  const translations_public = useTranslations('Public');
  return (
    <React.Fragment>
      <HeaderComponent></HeaderComponent>

      <Grid container spacing={10} sx={{ mt: 5 }}>
        <Grid size={2.5}>
          <Box sx={{
            padding: '12px'
          }}>
            <FBMenuItemButton title="Name" avatar="123"></FBMenuItemButton>
            <FBMenuItemButton title="Meta AI"></FBMenuItemButton>
          </Box>

        </Grid>
        <Grid size={7}>
          <Stack direction="column" alignItems="center">
            <PostComposerCard></PostComposerCard>
            <Post></Post>
          </Stack>
        </Grid>
        <Grid size={2.5}>
          
          <Box sx={{
            padding: '12px'
          }}>
            <Box>
              <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography sx={{
                color: 'var(--primary-text-2)'
              }} variant="h6" gutterBottom>
                {translations('Text_Friend_Invitation')}
              </Typography>
              <Button variant="text" className="button">{translations_public('Text_More_All')}</Button>
            </Box>

            <Box>
              <Friend_Invitation></Friend_Invitation>
            </Box>
            </Box>
            <Divider sx={{
              margin:'12px 0'
            }}></Divider>
            <Box>
              <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography sx={{
                color: 'var(--primary-text-2)'
              }} variant="h6" gutterBottom>
                {translations('Text_Contact_List')}
              </Typography>
              <Box>
                <IconButton>
                  <Search size={16} />
                </IconButton>
                <IconButton>
                  <Ellipsis size={16} />
                </IconButton>

              </Box>
            </Box>

            <Box>
              <UserOnline></UserOnline>
            </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
