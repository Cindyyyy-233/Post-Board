import React, {useEffect, useState } from 'react'
import {TweetsList} from './list'
import {apiTweetDetail} from './lookup'
import {ParentTweet, Tweet} from './detail'
import {TweetCreate} from './create'

export function TweetsComponent(props) {
    const [newTweets, setNewTweets] = useState([])
    const canTweet = props.canTweet === "false" ? false : true

    const handleNewTweet = (newTweet) => {
        //backend api response handler
        let tempNewTweets = [...newTweets]
        tempNewTweets.unshift(newTweet) //add to the begining of the array
        setNewTweets(tempNewTweets)
    }

    return <div className={props.className}>
        {canTweet === true && <TweetCreate didTweet={handleNewTweet} className = 'col-12 mb-3'/>}
        <TweetsList newTweets = {newTweets} {...props}/>
    </div>
}

export function TweetDetailComponent(props) {
    const {tweetId} = props
    console.log(tweetId)
    const [didLookup, setDidLookup] = useState(false)
    const [tweet, setTweet] = useState(null)

    const handleBackendLookup = (response, status) => {
        if (status === 200) {
            setTweet(response)
        } else {
            alert("There was an error finding the tweet")
        }
    }
    useEffect(() => {
        if (didLookup === false) {
            apiTweetDetail(tweetId, handleBackendLookup)
            setDidLookup(true)
        }
    }, [tweetId, didLookup, setDidLookup])

    return tweet === null ? null : <Tweet tweet={tweet} className={props.className} />
}