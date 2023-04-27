import { gql } from "@apollo/client";

const GET_SIGNER = gql`
    query GetSigner($id: ID) {
        auctionDetail(id: $id) {
            allowListSigner
        }
    }
`;

export default GET_SIGNER;
