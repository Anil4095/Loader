import React from 'react'
import { Box, styled } from '@material-ui/core'
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledLoading = styled('div')(() => ({
    width: '96%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: 'auto',
        height: '41px',
    },
    "& .circleProgress": {
        position: 'absolute',
    
        right: 0,
        top: 'calc(49% - 18px)',
        height:"41px"
    }
}))

const Loading = () => {

    return (
        <StyledLoading>
            <Box style={{marginTop:"25%"}} position="relative">
                <img  src="https://develop4u.co/media/reviews/photos/thumbnail/200x200c/ff/16/f5/img-global-infotech-logo-91-1563344150.png" alt="" />
                <CircularProgress  className="circleProgress" />
            </Box>
        </StyledLoading>
    )
}

export default Loading
