import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }), shallow);

    const handleSubmit = async() => {
        console.log("Current Edges:", edges);


        const formData = new FormData();
        formData.append('nodes', JSON.stringify(nodes));
        formData.append('edges', JSON.stringify(edges));

        try{
            const response = await fetch('https://pipeline-builder-3rk9.onrender.com/', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            let pipelineStatus = "";
            if (data.is_dag) {
                pipelineStatus = "Looks good! Your pipeline is setup correctly and can be processed.";
            } else {
                pipelineStatus = "Wait, there's a loop! Your nodes are connecting back to each other in a circle. You'll need to fix that so the data flows in one direction.";
            }

            alert(
                `Check Status:\n\n` +
                `Nodes on canvas: ${data.num_nodes}\n` +
                `Connections made: ${data.num_edges}\n\n` +
                `Status ${pipelineStatus}`
            );
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to connect to backend. Is the server running?");
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button className="submit-button" type="button" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};