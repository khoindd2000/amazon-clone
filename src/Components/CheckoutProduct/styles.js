import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    checkoutProduct:{
        display: 'flex',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginTop: '20px',
        marginBottom: '20px',
    },
    checkoutProduct_info:{
        paddingLeft: '20px',
    },
    checkoutButton:{
        background: '#f0c14b',
        border: '1px solid',
        marginTop: '10px',
        borderColor: '#a88734 #9c7e31 #846a29',
        color: "#111",
        "&:hover":{
            cursor: 'pointer',
        },
    },
    checkoutProduct_image:{
        objectFit: 'contain',
        width: '180px',
        height: '180px',
    },
    checkoutProduct_rating:{
        display: 'flex',
    },
    checkoutProduct_title:{
        fontSize: '17px',
        fontWeight: '800',
    }
}))