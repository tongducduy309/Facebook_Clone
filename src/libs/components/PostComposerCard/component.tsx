'use client';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "./style.module.css";
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';
import { useState } from "react";
import { PostRes } from "@/libs/shared/modules/Post";
import { ButtonActionHasIcon } from "../ButtonActionHasIcon/component";
interface Props {
    buttons?: React.ReactNode;
}



export function PostComposerCard(props: Props) {
    const translations = useTranslations('Components.PostComposerCard');
    const [post, setPost] = useState<Partial<PostRes>>();
    return (
        <Paper className={styles.card} elevation={1}>
            <Box sx={{
                display: 'flex',
                paddingBottom:'12px'
            }}>
                <Avatar className={styles.avatar} alt="Avatar" src="/images/building.png" />
                <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'var(--primary-placeholder)',
                            backgroundColor: 'var(--color-gray-1)',
                            padding: '10px 20px',
                            borderRadius: '100px',
                            width:'100%',
                            userSelect:'none',
                            cursor:'text'

                        }}>{translations('Placeholder',{name:'Đức Duy'})}</Box>
            </Box>
            <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={1} sx={{
                borderTop: '1px solid var(--cl-divider)',
                paddingTop:'12px',
                width: '100%',
            }}>
                <ButtonActionHasIcon image="/images/buttons/livestream.png" text={translations('Button_Livestream')}></ButtonActionHasIcon>
                <ButtonActionHasIcon image="/images/buttons/image&video.png" text={translations('Button_Add_Video&Image')}></ButtonActionHasIcon>
                <ButtonActionHasIcon image="/images/buttons/reaction&activity.png" text={translations('Button_Reaction&Activity')}></ButtonActionHasIcon>
            </Stack>
        </Paper>
    )

}
