import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    product:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '10px',
        padding: '20px',
        width: '100%',
        maxHeight: '400px',
        minWidth: '100px',
        zIndex: 1,
        '&:hover':{
            boxShadow: '10px 5px 50px black',
            transition: 'all 0.3s ease',
        },
        borderRadius: '10px',
        backgroundColor: 'white',
    },
    img:{
        maxHeight: '200px',
        width: '100%',
        objectFit: 'contain',
        marginBottom: '15px',
    },
    product_info:{
        height: '100px',
        marginBottom: '15px',
    },
    product_price:{
        marginTop: '5px',
    },
    product_rating:{
        display: 'flex',
    },
    button:{
        background: '#f0c14b',
        border: '1px solid',
        marginTop: '10px',
        borderColor: '#a88734 #9c7e31 #846a29',
        color: '#111',
        cursor: 'pointer',
    }

}))