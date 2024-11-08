"use client";

import { useEffect } from "react";

const VoiceflowWidget = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        script.type = "text/javascript";
        script.onload = () => {
            if ((window as any).voiceflow) {
                (window as any).voiceflow.chat.load({
                    verify: { projectID: "672b44db6b6553d4e457260d" },
                    url: "https://general-runtime.voiceflow.com",
                    versionID: "production",
                    assistant: {
                        title: "ICG Mohira",
                        description:
                            "ICG companiyamiz haqida qiziqtirgan savollaringizni bering. ☺",
                    },
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="voiceflow-widget" className="voiceflow-widget"></div>;
};

export default VoiceflowWidget;
