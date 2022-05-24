import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center ">
            <progress class="progress w-full bg-primary"></progress>
        </div>
    );
};

export default Loading;