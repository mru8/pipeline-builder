import {Handle} from 'reactflow';

export const BaseNode = ({ id, label, children, handles}) => {
    return (
        <div style = {{
            width: 200,
            minHeight: 80,
            border: '1px solid #777',
            borderRadius: '5px',
            background: '#fff',
            padding: '10px'
        }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px', borderBottom: '1px solid #eee'}}>
                {label}
            </div>
            <div>
                {children}
            </div>
            {/* This maps through any handles we define for the node */}
            {handles.map((handle, idx) => (
                <Handle
                    key = {`${id}-${idx}`}
                    type = {handle.type}
                    position = {handle.position}
                    id = {`${id}-${handle.id}`}
                    style = {handle.style}
                />
            ))}
        </div>
    );
};