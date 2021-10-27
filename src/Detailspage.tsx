import './App.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
    useLocation
} from "react-router-dom";
import Editdialog from './Editdialog';
import * as homelistUserComponent_homelist from "./__generated__/homelistUserComponent_homelist.graphql";



interface Props {
    preloadedQuery: homelistUserComponent_homelist.homelistUserComponent_homelist$key

}
interface founddata {
    id: string;
    projectsUrl: unknown;
    nameWithOwner: string;
    description: string | null;
    url: any;
    createdAt: any;
    name: string;
    isPrivate: boolean;
    collaborators: {
        totalCount: number;
    } | null;
    issues: {
        totalCount: number;
        nodes: ReadonlyArray<{
            id: string;
            url: unknown;
        } | null> | null;
    };
}


function Detailspage() {
    let location: any = useLocation();
    const found: any = location?.state?.fromDashboard;
    return (
        <>
            <div className="container border1">
                <div className="container  Gitlogo">
                    <div className="d-flex justify-content-between">
                        <div>
                            <Typography variant="h4" gutterBottom component="div">
                                {found?.name}
                            </Typography>
                        </div>
                        <div>
                            <Editdialog foundid={found?.id} />
                        </div>
                    </div>
                    <Divider />
                    <div className="Marginlist">
                        <Typography variant="h5" gutterBottom component="div">
                            Description
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            {found?.description ? found.description : 'No description'}
                        </Typography>
                    </div>
                    <div className="Marginlist">
                        <Typography variant="h5" gutterBottom component="div">
                            Collaborators
                        </Typography>

                        <Typography variant="h6" gutterBottom component="div">
                            {found?.collaborators?.totalCount}
                        </Typography>
                    </div>
                    <div className="Marginlist">
                        <Typography variant="h5" gutterBottom component="div">
                            Git Repo Url
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <a href={found?.url} target="_blank" without rel="noreferrer" > {found?.url} </a>
                        </Typography>
                    </div>
                    <div className="Marginlist">
                        <Typography variant="h5" gutterBottom component="div">
                            Created Date
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            {found?.createdAt?.substring(0, 10)}
                        </Typography>
                    </div>
                    <div className="Marginlist">
                        <Typography variant="h5" gutterBottom component="div">
                            Issue Url
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            {found?.issues?.nodes?.map((e: any) => e.url)}
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detailspage;
