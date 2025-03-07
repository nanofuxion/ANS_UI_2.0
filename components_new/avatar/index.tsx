import { ANSData, DUMMY_ANS_DATA } from '../../src/types';
import { ARWEAVE_URL } from '../../src/constants';

export type AvatarOptions = {
  customUrl?: string;
  height?: string;
  width?: string;
};

function Avatar ({ansData, options} :{ansData: ANSData, options?: AvatarOptions}) {
  if (!ansData) ansData = DUMMY_ANS_DATA;
  let url;
  const { customUrl, height, width } = options || {};
  if (customUrl) url = customUrl;
  else {
    if (ansData.avatar) url = `${ARWEAVE_URL + ansData.avatar}`;
  }

  return (
    <div className="flex rounded-full overflow-hidden border-[2px] mt-1"
      style={{
        backgroundColor: ansData.address_color || "#000",
        border: '2px solid '+ (ansData.address_color),
        height: height || '36px',
        width: width || '36px',
      }}
    >
      {ansData.avatar ?
        <img src={url} className="w-full h-full" alt="Profile" />
        : 
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="absolute z-10 uppercase select-none bg-inherit text-white font-medium text-xl">{ansData.currentLabel?.[0] || "?"}</div>
          <div className="absolute bg-gradient-to-l from-[#9E00FF] to-[#1273EA] rotate-45 origin-center w-full h-full"></div>
        </div>
      }
    </div>
  )
}

export function AvatarLoading() {
  return (
    <div className={`flex rounded-full h-[36px] w-[36px] overflow-hidden border-[2px] mt-1 animate-pulse bg-gray-400`}>

    </div>
    )

}

export default Avatar;