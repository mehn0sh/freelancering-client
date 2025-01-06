import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalService";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();

  const { mutate: changeProposalStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      // queryClient.invalidateQueries({
      //   queryKey: ["project", projectId],
      // });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeProposalStatus };
}
