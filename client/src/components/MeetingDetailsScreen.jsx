/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { CheckIcon, ClipboardIcon } from "@heroicons/react/outline";
import { Constants } from "@videosdk.live/react-sdk";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa6";

export function MeetingDetailsScreen({
  onClickJoin,
  _handleOnCreateMeeting,
  participantName,
  setParticipantName,
  videoTrack,
  setVideoTrack,
  onClickStartMeeting,
  setMeetingMode,
  meetingMode,
}) {
  const [studioCode, setStudioCode] = useState("");
  const [studioCodeError, setStudioCodeError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [iscreateMeetingClicked, setIscreateMeetingClicked] = useState(false);
  const [isJoinMeetingClicked, setIsJoinMeetingClicked] = useState(false);

  return (
    <div
      className={`flex flex-1 flex-col justify-center w-full md:p-[6px] sm:p-1 p-1.5`}
    >
      {iscreateMeetingClicked ? (
        <div className="border border-solid border-gray-400 rounded-xl px-4 py-3  flex items-center justify-center">
          <p className="text-white text-base">{`Studio code : ${studioCode}`}</p>
          <button
            className="ml-2"
            onClick={() => {
              navigator.clipboard.writeText(studioCode);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 3000);
            }}
          >
            {isCopied ? (
              <FaCheck className="h-5 w-5 text-green-400" />
            ) : (
              <FaRegClipboard className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      ) : isJoinMeetingClicked ? (
        <>
          <input
            defaultValue={studioCode}
            onChange={(e) => {
              setStudioCode(e.target.value);
            }}
            placeholder={"Enter studio code"}
            className="px-4 py-3 bg-gray-600 rounded-xl text-white w-full text-center"
          />
          {studioCodeError && (
            <p className="text-xs text-red-600">
              Please enter valid studioCode
            </p>
          )}
        </>
      ) : null}

      {(iscreateMeetingClicked || isJoinMeetingClicked) && (
        <>
          <input
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
            // value={}
            placeholder="Enter your name"
            className="px-4 py-3 mt-5 bg-gray-600 rounded-xl text-white w-full text-center"
          />
          <button
            // disabled={participantName && participantName.length < 5}
            className={`w-full ${
              participantName && participantName.length < 3
                ? "bg-gray-600"
                : "bg-purple-300"
            }  text-white px-2 py-3 rounded-xl mt-5`}
            onClick={(e) => {
              if (iscreateMeetingClicked) {
                if (videoTrack) {
                  videoTrack.stop();
                  setVideoTrack(null);
                }
                onClickStartMeeting();
              } else {
                if (studioCode.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
                  onClickJoin(studioCode);
                } else setStudioCodeError(true);
              }
            }}
          >
            {iscreateMeetingClicked
              ? "Start a meeting"
              : isJoinMeetingClicked &&
                meetingMode === Constants.modes.CONFERENCE
              ? "Join Studio"
              : "Join Streaming Room"}
          </button>
        </>
      )}

      {!iscreateMeetingClicked && !isJoinMeetingClicked && (
        <div className="w-full md:mt-0 mt-4 flex flex-col">
          <div className="flex items-center justify-center flex-col w-full">
            <button
              className="w-full bg-purple-300 text-white px-2 py-3 rounded-xl"
              onClick={async (e) => {
                const studioCode = await _handleOnCreateMeeting();
                setStudioCode(studioCode);
                setIscreateMeetingClicked(true);
                setMeetingMode(Constants.modes.CONFERENCE);
              }}
            >
              Create a meeting
            </button>

            <button
              className="w-full bg-purple-300 text-white px-2 py-3 mt-5 rounded-xl"
              // eslint-disable-next-line no-unused-vars
              onClick={async (e) => {
                setIsJoinMeetingClicked(true);
                setMeetingMode(Constants.modes.CONFERENCE);
              }}
            >
              Join as a Host
            </button>
            <button
              className="w-full bg-gray-600 text-white px-2 py-3 rounded-xl mt-5"
              onClick={(e) => {
                setIsJoinMeetingClicked(true);
                setMeetingMode(Constants.modes.VIEWER);
              }}
            >
              Join as a Viewer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
