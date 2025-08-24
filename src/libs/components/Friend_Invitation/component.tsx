'use client';
import Box from "@mui/material/Box";
import { Avatar, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { UserOnlineRes } from "@/libs/shared/modules/User";
import FBButton from "@/components/Button/component";
interface Props {
    id?: string;
}



export function Friend_Invitation(props: Props) {
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
            <Box sx={{ width: '100%' }}>
                <Box sx={{ width: '100%' }}>
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
                <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                    <FBButton layout="primary">Xác nhận</FBButton>
                    <FBButton layout="default">Xóa</FBButton>
                </Stack>
            </Box>
        </Box>
    )

}
