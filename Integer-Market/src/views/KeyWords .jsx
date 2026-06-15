const KeyWords = ({ seoKeywords }) => {
    return (
        <div className="p-4">
            <p className="text-20 font-bold mb-2 text-primary">Keywords</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-2 text-16">
                {
                    seoKeywords ?
                        seoKeywords.map((item, i) => {
                            return (
                                <div className="" key={i}>{item}</div>
                            );
                        })
                        :
                        "No Keywords"
                }
            </div>
        </div>
    );
};
export default KeyWords;