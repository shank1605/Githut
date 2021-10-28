import './App.css';
import {
    usePreloadedQuery, PreloadedQuery, usePaginationFragment
} from 'react-relay/hooks';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import {
    Link
} from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import * as homelistUserComponent_homelist from "./__generated__/homelistUserComponent_homelist.graphql";
import * as listRepositoryNameQuery from "./__generated__/listRepositoryNameQuery.graphql";
const graphql = require('babel-plugin-relay/macro');
type Props = {
    preloadedQuery: homelistUserComponent_homelist.homelistUserComponent_homelist$key
}
export const listfragement = graphql`
 fragment homelistUserComponent_homelist on Query @argumentDefinitions(first: {type: "Int"} after: {type: "String"}) 
    @refetchable(queryName: "RepositoryName") {
      viewer{
      repositories(first: $first, after: $after) @connection(key: " homelistUserComponent_repositories") {
        edges {
          cursor
          node {
           id
    	url
        name
    nameWithOwner
     isPrivate 
     description
     createdAt
        collaborators{
          totalCount
        }
        issues(first:10){
        	totalCount
          nodes{
            id
          	url
          }
          
        }
      
       }
     
      }
      pageInfo{
        endCursor
        hasNextPage
      }
      }
    }
  }`;

function HomeList(props: Props) {

    const {
        data,
        loadNext,
        isLoadingNext,
        refetch,
    } = usePaginationFragment<listRepositoryNameQuery.listRepositoryNameQuery, homelistUserComponent_homelist.homelistUserComponent_homelist$key>(
        listfragement,
        props.preloadedQuery
    );

    return (
        <>
            <div className="container scrollable">
                {data?.viewer?.repositories?.edges?.map((e: any) => {
                    return (
                        <div key={e.node.id}>
                            <div className="row Marginlist" >
                                <div className="col-lg-12 col-sm-12">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <Link to={{ pathname: `/home/detailspage/${e.node.name}`, state: { fromDashboard: e.node } }} > <h5 className="reponame" style={{ padding: '10px',color:'black' }}>{e?.node?.name}</h5>
                                            </Link>
                                            <span style={{ padding: '10px' }}><Chip style={{ backgroundColor: 'black', color: 'grey' }} label={e.node.isPrivate ? 'Private' : 'Public'} /></span>
                                        </div>
                                        <div className="d-flex ">
                                            <h6 style={{ color:'black', padding: '10px' }}>
                                                {e?.node?.createdAt?.substring(0, 10)}
                                            </h6>
                                        </div>
                                    </div>
                                    <div>
                                        <Tooltip title="Repo Url" placement="right-start">
                                            <a href={e?.node?.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', padding: '10px' }}> {e?.node?.url}</a>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                        </div>
                    )
                })}
                <Button onClick={() => loadNext(5)} variant="outlined" className="bounce" style={{ margin: '20px 0px 26px', background: 'Teal', color: "white", borderRadius: '20px', padding: '7px 40px' }}>
                    Load More
                </Button>
            </div>
        </>
    );
}

export default HomeList;
