export const modalStyles = {
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: '#1976d2',
        boxShadow: 24,
        p: 4,
    },
    inputFields: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1rem',
        marginBottom: '1rem',
        '.MuiInput-root': {
            marginBottom: '1rem',
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'end',
    },
    newExcursionForm: {
        display: 'flex',
        minWidth: '407px',
        
    },
    newExcursionText: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        textDecoration: 'underline'          
    },
};