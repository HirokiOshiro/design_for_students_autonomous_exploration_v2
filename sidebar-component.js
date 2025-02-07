import React, { useState } from 'react';

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(true);

  const tocItems = [
    {
      title: "1. 🔍探索的学習環境の創出",
      id: "12941d30-5474-80e2-880a-e636bd82e41a",
      subItems: [
        {
          title: "1.1 🎲多様な可能性との偶発的な出会いの場",
          id: "12941d30-5474-80e4-8bae-f254b26034be"
        },
        {
          title: "1.2 👤自己理解を深める機会の提供",
          id: "12941d30-5474-806a-ac1c-d3584ba97fd4"
        }
      ]
    },
    {
      title: "2. 🧪選択と試行を支援する仕組み",
      id: "12941d30-5474-807f-a408-e534fc6b25cf",
      subItems: [
        {
          title: "2.1 🛡️ローリスクな試行の仕組み",
          id: "12941d30-5474-80e2-b457-cb411a2b6a39"
        },
        {
          title: "2.2 🗺️多様な選択肢の発見支援",
          id: "12941d30-5474-804d-8cb5-db42bf08b9b4"
        }
      ]
    },
    {
      title: "3. 🌱自律的な成長を支える体制",
      id: "12941d30-5474-80e9-a716-ee25a2145a80",
      subItems: [
        {
          title: "3.1 🤝非指示的な支援者の役割",
          id: "12941d30-5474-80fc-ae95-e44bd7e8c02b"
        },
        {
          title: "3.2 👥ピアサポートの活性化",
          id: "12941d30-5474-80dd-bbd3-ebe522b35c79"
        }
      ]
    },
    {
      title: "4. 📊成長の個別性を尊重する評価",
      id: "12941d30-5474-8044-89a3-d22930b3550d",
      subItems: [
        {
          title: "4.1 🏆自己評価の支援",
          id: "12941d30-5474-8066-9d17-f51a8578513b"
        },
        {
          title: "4.2 🔬多面的な評価の実現",
          id: "12941d30-5474-80da-92b2-ca9a3584a978"
        }
      ]
    }
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg overflow-y-auto">
      <div className="p-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          {isOpen ? '▼ 目次を閉じる' : '▶ 目次を開く'}
        </button>
        
        {isOpen && (
          <nav className="space-y-2">
            {tocItems.map((item) => (
              <div key={item.id} className="mb-4">
                <div
                  onClick={() => handleClick(item.id)}
                  className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium"
                >
                  {item.title}
                </div>
                {item.subItems && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <div
                        key={subItem.id}
                        onClick={() => handleClick(subItem.id)}
                        className="text-gray-600 hover:text-blue-500 cursor-pointer text-sm"
                      >
                        {subItem.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default TableOfContents;