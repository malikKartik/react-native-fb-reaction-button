import { useEffect, useState } from "react";
import { actionTitles } from "."

export const useHandleActionInteraction = ({isReactionBarOpen, setIsReactBarOpen}) =>{
    const [showReactionButton, setShowReactionButton] = useState(false);
    useEffect(()=>{
        if(!isReactionBarOpen){
            setShowReactionButton(false)
        }
    },[isReactionBarOpen])
    const handleActionTap = (actionTitle) =>{
        if(actionTitle === actionTitles.LIKE){
            if(!showReactionButton){
                setIsReactBarOpen(true)
            }
            setShowReactionButton(!showReactionButton);
        }
    }

    return {
        handleActionTap,
        showReactionButton,
    }
}