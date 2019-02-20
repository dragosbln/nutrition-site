import React from 'react'
import {askForSupport} from '../../res/text/Texts'
import '../../res/stylesheets/container.css'
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton} from 'react-share'
import {FacebookIcon, TwitterIcon, LinkedinIcon} from 'react-share'
import './share.css'

const share = () => (
    <div className="mContainer" id='share'>
        <h1>Iti multumim!</h1>
        <h6>{askForSupport}</h6>
        <FacebookShareButton className="shareBtn" url="https://www.facebook.com/">
            <FacebookIcon round size={64} />
        </FacebookShareButton>
        <TwitterShareButton className="shareBtn" url="https://www.facebook.com/">
            <TwitterIcon round size={64} />
        </TwitterShareButton>
        <LinkedinShareButton className="shareBtn" url="https://www.facebook.com/">
            <LinkedinIcon round size={64} />
        </LinkedinShareButton>
    </div>
);

export default share;