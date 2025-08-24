'use client';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "./style.module.css";
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';
import { ThumbsUp, MessageCircle, Send, X, Ellipsis } from 'lucide-react';
import { useState } from "react";
import { PostRes } from "@/libs/shared/modules/Post";
interface Props {
    id?: string;
}



export function Post(props: Props) {
    const translations = useTranslations('Components.Post');
    const [post, setPost] = useState<Partial<PostRes>>();
    return (
        <Paper className={styles.post} elevation={1}>
            <Box sx={{
                display: 'flex',
                padding: '12px'
            }}>
                <Box sx={{
                    display: 'flex',
                    paddingRight: "5px"
                }}>
                    <Avatar className={styles.avatar} alt="Avatar" src="/images/building.png" />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography sx={{
                            fontWeight: 700,
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 1,
                        }} variant="subtitle2" gutterBottom>
                            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur
                        </Typography>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                7 phút
                            </Typography>
                        </Box>

                    </Box>
                </Box>
                <Box>
                    <Stack direction="row" spacing={1}>
                        <IconButton>
                            <Ellipsis />
                        </IconButton>

                        <IconButton>
                            <X />
                        </IconButton>

                    </Stack>
                </Box>
            </Box>
            <Box sx={{ padding: "0 12px 12px 12px" }}>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
            </Box>
            <img src="images/building.png" alt="" />
            <Stack sx={{ width: "100%", padding: "0 12px" }} direction="row" justifyContent="space-between">
                <Box sx={{ display: "flex" }}>
                    <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                        {post?.reactions}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ marginRight: "5px" }} variant="caption" gutterBottom>
                        {post?.comments} bình luận
                    </Typography>
                    <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                        {post?.shares} luợt chia sẻ
                    </Typography>
                </Box>


            </Stack>
            <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{
                borderTop: '1px solid var(--cl-divider)',
                padding: '3px 12px',
                width: '100%'
            }}>
                <Button className={styles.button} startIcon={<ThumbsUp />}>
                    {translations('Button_Reaction')}
                </Button>
                <Button className={styles.button} startIcon={<MessageCircle />}>
                    {translations('Button_Comment')}
                </Button>
                <Button className={styles.button} startIcon={<Send />}>
                    {translations('Button_Share')}
                </Button>
            </Stack>
        </Paper>
    )

}
