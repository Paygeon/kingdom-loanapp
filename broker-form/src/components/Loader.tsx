import { Skeleton } from "antd";

export default function Loader(){
    return(
        <div className="max-w-[600px] mx-auto">
            <div className="my-3">
                <Skeleton.Button style={{height:"80px"}} block active/>
            </div>
            <div className="my-3">
                <Skeleton paragraph={{rows:6}} active/>
            </div>
        </div>
    )
}