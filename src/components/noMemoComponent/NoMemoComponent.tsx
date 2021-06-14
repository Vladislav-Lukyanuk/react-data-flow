import {FC} from "react";

import {logInfo} from "../../utilities";

const COMPONENT_NAME = 'NoMemoComponent'

type TNoMemoComponent = {
    content?: number;
    metaMessage: string;
}

export const NoMemoComponent: FC<TNoMemoComponent> = ({ content= 0, metaMessage }) => {
    logInfo(COMPONENT_NAME,  metaMessage + 'call render');

    return (
        <div style={{ backgroundColor: 'green'}}>
            <div>{COMPONENT_NAME}</div>
            {content}
        </div>
    )
}
