import { useQuery } from "@tanstack/react-query";
import { getProposalApi } from "../../services/proposalService";
export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryFn: getProposalApi,
    queryKey: ["proposals"],
  });

  const { proposals } = data || {};

  return { proposals, isLoading };
}
