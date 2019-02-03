import React from 'react';
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        minWidth: 0, // So the Typography noWrap works
    },
    grid_item: {
        marginBottom: 50,
    },
    grid: {
        paddingTop: 30,
    }
})

class Content extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <main>
                <div className={classes.toolbar}/>
                <Typography variant="display3"  noWrap>
                    Welcome to the classroom !
                </Typography>
                <Typography variant="subheading" gutterBottom noWrap>
                    Currently only Classroom Page (First Icon) and ClassList Page (Second Icon) is not empty.
                </Typography>
                <Typography variant="subheading" gutterBottom noWrap>
                    Safari cannot render react/vue correctly, so please browse with chrome/firefox, maybe we will figure it out later.
                </Typography>
                <Typography variant="subheading" gutterBottom noWrap>
                    All layouts are temporary, for testing only.
                </Typography>
                <Typography variant="caption" gutterBottom noWrap>
                    Copyright © 2019 Overcoded All rights reserved
                </Typography>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);