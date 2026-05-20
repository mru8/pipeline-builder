// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className='toolbar' style={{ padding: '15px' }}>
            <div style={{ marginTop: '5px', display:"flex", flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='note' label='Note'/>
                <DraggableNode type='timer' label='Timer'/>
                <DraggableNode type='alert' label='Alert'/>
                <DraggableNode type='database' label='Database'/>
                <DraggableNode type='auth' label='Auth'/>

            </div>
        </div>
    );
};
