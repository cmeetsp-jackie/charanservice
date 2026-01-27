import React, { useState } from 'react';

export default function ProductPage() {
  const [selectedShipping, setSelectedShipping] = useState('care');
  const [liked, setLiked] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1a2e',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      {/* Phone Frame */}
      <div style={{
        width: '375px',
        backgroundColor: '#0f0f0f',
        borderRadius: '45px',
        padding: '10px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
      }}>
        {/* Phone Screen */}
        <div style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '38px',
          overflow: 'hidden',
          fontFamily: "'Pretendard', -apple-system, sans-serif",
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Notch */}
          <div style={{
            height: '28px',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
            flexShrink: 0
          }}>
            <div style={{
              width: '70px',
              height: '22px',
              backgroundColor: '#0f0f0f',
              borderRadius: '11px'
            }}/>
          </div>

          {/* Header */}
          <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 16px',
            borderBottom: '1px solid #f0f0f0',
            flexShrink: 0
          }}>
            <h1 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>차란</h1>
            <div style={{ display: 'flex', gap: '12px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
          </header>

          {/* Product Image */}
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <img 
              src="product.png" 
              alt="Maison Kitsune Sweater"
              style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#222' }}/>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#ddd' }}/>
            </div>
          </div>

          {/* Product Info */}
          <div style={{ padding: '10px 16px', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ padding: '3px 8px', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '11px' }}>Excellent</span>
              <span style={{ fontSize: '13px', fontWeight: '600' }}>🦊 MAISON KITUNE</span>
              <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>♡ 브랜드 찜</span>
            </div>
            <div style={{ fontSize: '10px', color: '#888' }}>디자이너/컨템포러리 {'>'} MAISON KITUNE</div>
            <div style={{ fontSize: '14px', fontWeight: '500', margin: '4px 0' }}>
              메종키츠네 라운드니트 <span style={{ color: '#7c3aed', fontSize: '11px' }}>New</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '11px', color: '#999', textDecoration: 'line-through' }}>240,300</span>
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#7c3aed' }}>63%</span>
              <span style={{ fontSize: '18px', fontWeight: '700' }}>89,000</span>
              <button style={{
                marginLeft: 'auto', padding: '5px 10px', backgroundColor: '#f8f5ff',
                border: '1px solid #e9e0ff', borderRadius: '5px', fontSize: '11px', fontWeight: '600', color: '#7c3aed'
              }}>↓ 쿠폰 받기</button>
            </div>
          </div>

          {/* Shipping Options */}
          <div style={{ padding: '10px 16px', backgroundColor: '#fafafa', borderTop: '1px solid #f0f0f0', flexShrink: 0 }}>
            <h3 style={{ fontSize: '12px', fontWeight: '600', margin: '0 0 8px', textAlign: 'center' }}>배송 옵션 선택</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <button onClick={() => setSelectedShipping('direct')} style={{
                padding: '10px 12px', backgroundColor: selectedShipping === 'direct' ? '#f8f5ff' : '#fff',
                border: selectedShipping === 'direct' ? '2px solid #7c3aed' : '1px solid #e0e0e0',
                borderRadius: '8px', textAlign: 'left', cursor: 'pointer', position: 'relative'
              }}>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>판매자 직배송</div>
                <div style={{ fontSize: '10px', color: '#888' }}>판매자가 직접 보내요</div>
                {selectedShipping === 'direct' && (
                  <div style={{
                    position: 'absolute', top: '10px', right: '10px', width: '18px', height: '18px',
                    backgroundColor: '#7c3aed', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                )}
              </button>
              <button onClick={() => setSelectedShipping('care')} style={{
                padding: '10px 12px', backgroundColor: selectedShipping === 'care' ? '#f8f5ff' : '#fff',
                border: selectedShipping === 'care' ? '2px solid #7c3aed' : '1px solid #e0e0e0',
                borderRadius: '8px', textAlign: 'left', cursor: 'pointer', position: 'relative'
              }}>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>차란케어 + 배송</div>
                <div style={{ fontSize: '10px', color: '#888' }}>상태확인 후 배송까지</div>
                {selectedShipping === 'care' && (
                  <div style={{
                    position: 'absolute', top: '10px', right: '10px', width: '18px', height: '18px',
                    backgroundColor: '#7c3aed', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div style={{
            borderTop: '1px solid #f0f0f0', padding: '10px 16px',
            display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0
          }}>
            <button onClick={() => setLiked(!liked)} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '4px 8px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? '#7c3aed' : 'none'} stroke={liked ? '#7c3aed' : '#999'} strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span style={{ fontSize: '9px', color: '#999' }}>0</span>
            </button>
            <button style={{
              flex: 1, padding: '12px', backgroundColor: '#fff', border: '2px solid #7c3aed',
              borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#7c3aed', cursor: 'pointer'
            }}>장바구니 담기</button>
            <button style={{
              flex: 1, padding: '12px', backgroundColor: '#7c3aed', border: 'none',
              borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer'
            }}>구매하기</button>
          </div>

          {/* Home Indicator */}
          <div style={{
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div style={{
              width: '100px',
              height: '4px',
              backgroundColor: '#0f0f0f',
              borderRadius: '2px'
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
}
