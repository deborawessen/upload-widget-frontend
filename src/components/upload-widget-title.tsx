import { UploadCloud } from "lucide-react";

export function UploadWidgetTitle() {
    const isThereAneyPendingUpload = true
    const uploadGlobalPercentage = 66
    return(
        <div className="flex items-center gap-1.5 text-sm font-medium">
            <UploadCloud className="size-4 text-zinc-400" strokeWidth={1.5} />
            
            {isThereAneyPendingUpload ? (  
                <span className="flex items-baseline gap-1">
                    Uploading
                    <span className="text-xs text-zinc-400 tabular-nums">{uploadGlobalPercentage}%</span>
                </span>

            ) : (
                <span className="">Upload Files</span>
                )}
        </div>
    )
}