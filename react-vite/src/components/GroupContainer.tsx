import { useQuery } from "@tanstack/react-query";
import { SubTitle } from "../components/SubTitle";
import { getGroups } from "../services/Group";
import { IGroup } from "../interfaces/Group";
import { GroupComponent } from "../components/GroupComponent";
import { FormGroup } from "../components/FormGroup";
import BasicModal from "../components/ModalApp";
export const GroupContainer = () => {
  const { data, isLoading } = useQuery({
    queryFn: getGroups,
    queryKey: ["groups"],
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <article className="flex gap-2 p-2 justify-between items-center">
        <SubTitle subtitle="your groups" />
        <BasicModal
          component={<FormGroup text="Create Group" />}
          text="Create Group"
          color={"success"}
        />
      </article>
      <section className="grid grid-cols-2 justify-items-center w-full h-full justify-center gap-4 mt-4 my-4">
        {data?.map((group: IGroup) => {
          return <GroupComponent key={group.id} group={group} />;
        })}
      </section>
    </>
  );
};
