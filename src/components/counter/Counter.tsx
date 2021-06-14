import {FC, useCallback, useState} from "react";
import {logInfo} from "../../utilities";
import {NoMemoComponent} from "../noMemoComponent/NoMemoComponent";
import {MemoComponent} from "../memoComponent/MemoComponent";

const COMPONENT_NAME = 'Root';

type TCounter = {
    simpleSlot: JSX.Element;
}

export const Counter: FC<TCounter> = ({ children, simpleSlot}) => {
    const [counter, setCounterValue] = useState(0);

    const handleClick = useCallback(() => {
        setCounterValue(prevValue => ++prevValue);
    }, []);

    logInfo(COMPONENT_NAME, 'call render');

    return (
        <div>
            <button onClick={handleClick}>Increment</button>
            <NoMemoComponent metaMessage={'should be rendered when counter is changed (NoMemo)'} content={counter} />
            <NoMemoComponent metaMessage={'should be rendered once (NoMemo)'} />
            <MemoComponent metaMessage={'should be rendered when counter is changed (Memo)'} content={counter} />
            <MemoComponent metaMessage={'should be rendered once (Memo)'} />
            {simpleSlot}
            {children}
        </div>
    )
}
