'use client';
import Box from "@mui/material/Box";
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';
import { useState } from "react";
import { UserOnlineRes } from "@/libs/shared/modules/User";
interface Props {
    title?:string;
    image?:string;
    avatar?:string;
}



export function FBMenuItemButton(props: Props) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems:'center',
            '&:hover': {
          backgroundColor: 'var(--bg-hover-btn)'
        },
        borderRadius:'8px',
        padding:'8px',
        cursor:'pointer'
        }}>
            {
                props.avatar&&
                <Avatar sx={{
                marginRight: '10px'
            }} alt="Avatar" src={props.avatar} />
            }
            {
                props.image&&
                <img src={props.image} alt="Avatar" />
            }
            <Typography variant="subtitle2" sx={{
                fontWeight:600,
                color:'var(--primary-text)'
            }}>
                {props.title}
            </Typography>
        </Box>
    )

}
