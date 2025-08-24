'use client';
import Box from "@mui/material/Box";
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';
import { useState } from "react";
import { UserOnlineRes } from "@/libs/shared/modules/User";
interface Props {
    id?: string;
}



export function UserOnline(props: Props) {
    const [user, setUser] = useState<Partial<UserOnlineRes>>();
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
                backgroundColor: 'var(--bg-hover-btn)'
            },
            borderRadius: '8px',
            padding: '8px',
            cursor: 'pointer'
        }}>
            <Avatar sx={{
                marginRight: '10px'
            }} alt="Avatar" src={user?.image} />
            <Typography variant="subtitle2" sx={{
                fontWeight: 600,
                color: 'var(--primary-text)',
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1
            }}>
                {user?.name || 'User'}
            </Typography>
        </Box>
    )

}
