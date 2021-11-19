
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://media.istockphoto.com/photos/neon-blog-sign-picture-id1270290167?b=1&k=20&m=1270290167&s=170667a&w=0&h=_5S-hkfJtimFnhM_9XOwu9HpVB2ya8vykNHi5e9BJeg='}) center/55% repeat-x #000`,
        height: '50vh',
        objectFit: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg';
    return (
        <>
            <Box className={classes.image}>
            </Box>
        </>
    )
}

export default Banner;