import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { AppID, ServerSecret } from "./config";

export function VideoComponent() {
  const { roomID } = useParams();
  console.log(roomID);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let myMeeting = async (element: any) => {
        if(!roomID || !containerRef.current){
            return;
        }
      const appID = AppID;
      const serverSecret = ServerSecret;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Anonymous",
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, 
        },
      });
    };

    if (containerRef.current) {
      myMeeting(containerRef.current);
    }

    return () => {
        if(containerRef.current){
            containerRef.current.innerHTML = "";
        }
    }
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
