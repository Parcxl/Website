import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['bedrijfsnaam', 'kvk', 'website', 'voornaam', 'achternaam', 'email', 'telefoon'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Verplichte velden ontbreken: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Forward request to Parcxl API
    const response = await fetch('https://app.sendwise.nl/api/accountaanvragen/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer parcxl-accountaanvragen-2025'
      },
      body: JSON.stringify({
        bedrijfsnaam: body.bedrijfsnaam,
        kvk: body.kvk,
        website: body.website,
        voornaam: body.voornaam,
        achternaam: body.achternaam,
        email: body.email,
        telefoon: body.telefoon
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { 
          success: false, 
          error: data.error || 'Er is een fout opgetreden bij het aanmaken van het account' 
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Account aanvraag succesvol verzonden',
      data: data.data
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw.' 
      },
      { status: 500 }
    );
  }
}

