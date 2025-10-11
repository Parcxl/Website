import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Ongeldige request data' 
        },
        { status: 400 }
      );
    }

    console.log('Received request data:', { ...body, email: '***', telefoon: '***' });

    // Validate required fields
    const requiredFields = ['bedrijfsnaam', 'kvk', 'website', 'voornaam', 'achternaam', 'email', 'telefoon'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      console.log('Missing fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          error: `Verplichte velden ontbreken: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Prepare data for Parcxl API
    const parcxlData = {
      bedrijfsnaam: body.bedrijfsnaam,
      kvk: body.kvk,
      website: body.website,
      voornaam: body.voornaam,
      achternaam: body.achternaam,
      email: body.email,
      telefoon: body.telefoon
    };

    console.log('Forwarding to Parcxl API...');

    // Forward request to Parcxl API
    let response;
    try {
      response = await fetch('https://app.sendwise.nl/api/accountaanvragen/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer parcxl-accountaanvragen-2025'
        },
        body: JSON.stringify(parcxlData)
      });
    } catch (fetchError) {
      console.error('Failed to connect to Parcxl API:', fetchError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Kan geen verbinding maken met het systeem. Probeer het later opnieuw.' 
        },
        { status: 503 }
      );
    }

    console.log('Parcxl API response status:', response.status);

    // Parse response
    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      console.error('Failed to parse Parcxl API response:', jsonError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Onverwacht antwoord van het systeem' 
        },
        { status: 502 }
      );
    }

    console.log('Parcxl API response data:', data);

    if (!response.ok) {
      console.error('Parcxl API error:', data);
      return NextResponse.json(
        { 
          success: false, 
          error: data.error || 'Er is een fout opgetreden bij het aanmaken van het account' 
        },
        { status: response.status }
      );
    }

    console.log('Account request created successfully');

    return NextResponse.json({
      success: true,
      message: 'Account aanvraag succesvol verzonden',
      data: data.data
    });

  } catch (error) {
    console.error('Unexpected API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

