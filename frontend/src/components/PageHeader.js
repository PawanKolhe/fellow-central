import React from 'react'
import '../sass/PageHeader.scss'
import { Icon } from '@iconify/react';
import logoutLine from '@iconify-icons/majesticons/logout-line';
import { connect } from 'react-redux'
import { signOut } from '../actions'

const PageHeader = ({ title, children, ...props }) => {
  const handleSignout = () => {
    props.signOut();
  }

  return (
    <div className="PageHeader">
      <div className="PageHeader_left">
        <div className="PageHeader_title">
          {title}
        </div>
      </div>
      <div className="PageHeader_right">
        <div className="PageHeader_slot">
          {children}
        </div>
        <div className="PageHeader_logout" onClick={handleSignout}>
          <Icon icon={logoutLine} />
        </div>
      </div>
    </div>
  )
}

export default connect(null, { signOut })(PageHeader)
