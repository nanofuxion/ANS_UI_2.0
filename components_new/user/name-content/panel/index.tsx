// @flow 
import * as React from 'react';
import { Bio } from './bio';
import { Tweets } from '../../../../components/Tweets';
import { Collectibles } from './collectibles';

type Props = {
    userInfo: {
        user: string;
        currentLabel: string;
        ownedLabels?: {
            label: string;
            scarcity: string;
            acquisationBlock: number;
            mintedFor: number;
        }[],
        nickname?: string;
        address_color: string;
        bio?: string;
        avatar?: string;
        links?: {
            github?: string;
            twitter?: string;
            customUrl?: string;
            instagram?: string;
        },
        subdomains?: any;
        freeSubdomains: number;
    }
};
export const Panel = (props: Props) => {

    const bio = typeof props.userInfo.bio === 'string' ? 
    props.userInfo.bio : "";

    return (
        <div className="grow flex flex-row flex-wrap rounded-md w-full h-full bg-base-100 overflow-x-hidden px-8 py-8 mb-10">
            <Bio text={bio} />
            {/* <div className="h-0 w-full -mx-10"></div> */}
            <Collectibles userInfo={props.userInfo} />
            {/* {props.userInfo?.links?.twitter && (
                <div className="flex flex-col w-1/3" >
                    <Tweets user={props.userInfo.links.twitter} className="mt-6 pb-5 px-6 overflow-y-hidden hidden lg:grid shrink-0" style={{height:"26.5rem"}} />
                </div> 
            )} */}
        </div>
    );
};

