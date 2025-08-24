'use client';
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./style.module.css";
interface Props {
    text?: string;
    image?: string;
}



export function ButtonActionHasIcon(props: Props) {
    return (
        <Box className={styles.button} sx={{
            '&:hover': {
          backgroundColor: 'var(--bg-hover-btn)'
        }
        }}>
            {props.image&&<img src={props.image} alt="Image Button" />}
            <Typography sx={{fontWeight:600}} variant="button">
                {props.text}
            </Typography>
        </Box>
    )

}
