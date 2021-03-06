import React , {Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getAllProfiles } from '../../actions/profile';

const Profiles = ({ getAllProfiles, profile : { profiles, load}}) => {
    useEffect(()=>{
        getAllProfiles();
    }, [getAllProfiles])

    return (
        <Fragment>
            {load ? (
                <Spinner />
            ) : (
                <Fragment>
                    <h1 className='large text-primary'>Member</h1>
                    <p className='lead'>
                        <i className='fab -fa-connectdevelop' />
                        Browse dan follow with member
                    </p>
                    <div className='profiles'>
                        {
                            profiles.length > 0 ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : (
                                <h4>No profiles found...</h4>
                            )
                        }
                    </div>
                </Fragment>
            )}  
        </Fragment>
    )

}


Profiles.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,// snippet ptfr
    profile: PropTypes.object.isRequired // snippet ptor
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getAllProfiles})(Profiles)
