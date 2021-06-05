import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    checkout:{
        display: 'flex',
        padding: '20px',
        backgroundColor: 'white',
        height: 'max-content',
    },
    checkout_ad:{
        width: '100%',
        marginBottom: '10px',
    },
    checkout_title:{
        marginRight: '10px',
        padding: '10px',
        borderBottom: '1px solid lightgray',
    },
}))