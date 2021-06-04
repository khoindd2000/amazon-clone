import {makeStyles} from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    header:{
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#131921',
        position: 'sticky',
        top: 0,
        zIndex: 100
    },
    header_logo:{
        width: '100px',
        objectFit: 'contain',
        margin: '0 20px',
        marginTop: '18px'
    },
    header_search:{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        borderRadius: '24px',
    },
    header_searchInput:{
        height: '12px',
        padding: '10px',
        border: 'none',
        width: '100%',
    },
    header_searchIcon:{
        padding: "5px",
        height: '22px !important',
        backgroundColor: '#cd9042',
    },
    header_OptionLineOne:{
        fontSize: '10px',
    },
    header_OptionLineTwo:{
        fontSize: '13px',
        fontWeight: '800',
    },
    header_OptionBasket:{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    },
    BasketIcon:{
        color: 'white',
        "&:hover":{
            color: '#cd9042',
            cursor: 'pointer',
        },
    },
    header_nav:{
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    header_option:{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10px',
        marginRight: '10px',
        color: 'white',
    },
    header_basketCount:{
        fontSize: '13px',
        fontWeight: '800',
        marginLeft: "10px",
        marginRight: "10px",
        color: "white"
    },
}))