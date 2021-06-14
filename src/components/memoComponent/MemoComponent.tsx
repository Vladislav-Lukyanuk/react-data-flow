import {FC, memo} from "react";

import {logInfo} from "../../utilities";

const COMPONENT_NAME = 'MemoComponent'

type TMemoComponent = {
    content?: number;
    metaMessage: string;
}

export const MemoComponent: FC<TMemoComponent> = memo(({ content= 0, metaMessage }) => {
    logInfo(COMPONENT_NAME,  metaMessage + 'call render');

    return (
        <div style={{ backgroundColor: 'gray'}}>
            <div>{COMPONENT_NAME}</div>
            {content}
        </div>
    )
});
