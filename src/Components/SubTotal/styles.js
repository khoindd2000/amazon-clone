import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    subtotal:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '150px',
        height: '150px',
        padding: '20px',
        backgroundColor: '#f3f3f3',
        border: '1px solid #dddddd',
        borderRadius: '3px',
    },
    subtotal_gift:{
        display: 'flex',
        alignItems: 'center',
    },
    subtotal_input:{
        marginRight: '5px',
    },
    subtotal_button:{
        '&:hover':{
            cursor: 'pointer',
        },
        background: '#f0c14b',
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: '#a88734 #9c7e31 #846a29',
        color: '#111',
    },
}))